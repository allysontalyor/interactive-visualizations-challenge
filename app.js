//create an init function to create a horizontal bar chart as a placeholder...
//I used subject id 940...
xValues = [163, 126, 113, 78, 71, 51, 50, 47, 40, 40];
xValuesReverse = xValues.reverse();
yValues = ["OTU 1167", "OTU 2859", "OTU 482", "OTU 2264", "OTU 41", "OTU 1189", "OTU 352", "OTU 189", "OTU 2318", "OTU 1977"];
yValuesReverse = yValues.reverse();
function init() {
  var trace1 = {
    x: xValuesReverse,
    y: yValuesReverse,
    type: "bar",
    orientation: 'h'
  };

  var data = [trace1];

  var layout = {
  title: "Belly Button Data for Subject 940",
  //xaxis: {title: "Eye Color"},
  //yaxis: {title: "Eye Flickers per ???"}
  };

  Plotly.newPlot("bar", data, layout);
};

//Create Bubble Plot to hold the place for a new plot....Use patient id 940 like above bar chart
//============================================================
var otu_bubble = [1167, 2859, 482, 2264, 41, 1189, 352, 189, 2318, 1977, 3450, 874, 1959, 2191, 1950, 2077, 2275, 944, 2184, 2244, 2024, 2419, 2811, 165, 2782, 2247, 2011, 2396, 830, 2964, 1795, 2722, 307, 2178, 2908, 1193, 2167, 1208, 2039, 1274, 2739, 2737, 1314, 1962, 2186, 2335, 2936, 907, 833, 2483, 2475, 2491, 2291, 159, 2571, 2350, 2342, 2546, 725, 170, 1505, 513, 259, 1169, 258, 1232, 1497, 1498, 1503, 412, 2235, 1960, 1968, 121, 2065, 340, 2110, 2188, 357, 342];
var sample_values_bubble = [163, 126, 113, 78, 71, 51, 50, 47, 40, 40, 37, 36, 30, 28, 25, 23, 22, 19, 19, 14, 13, 13, 13, 12, 12, 11, 11, 11, 10, 10, 10, 8, 7, 7, 7, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
var otu_length = otu_bubble.length;
console.log(otu_length);

var colors = [];
for (var i = 0; i < otu_bubble.length; i++) {
  var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  colors.push(randomColor);
};

console.log(colors);


//create the bubble plot
var trace1 = {
  x: otu_bubble,
  y: sample_values_bubble,
  mode: 'markers',
  marker: {
    size: sample_values_bubble,
    color: colors
  }
};

var data = [trace1];

var layout = {
  showlegend: false,
  xaxis: { title: "OTU ID" },
};

Plotly.newPlot("bubble", data, layout);

//Create a very basic gauge chart to hold the place on the dashboard
//========================================================
var data = [
	{
		domain: { x: [0, 1], y: [0, 1] },
    value: 5,
    gauge: {
      axis: { range: [null, 9] }
    },
		title: { text: "Washing Frequency" },
		type: "indicator",
		mode: "gauge+number"
	}
];

//var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
Plotly.newPlot('gauge', data);






//read in the JSON file
//NOTE:  remember to start a localhost server to read in the JSON file
//this can be done in terminal by navigating to the location of the index.html file
//and typing in the command: python -m http.server
d3.json("samples.json").then ((importedData) => {
    console.log(importedData);
    var idList = importedData.names;
    console.log(idList);
    var metaData = importedData.metadata;
    console.log(metaData);
    var samples = importedData.samples;
    console.log(samples);

    var initData = samples.filter(patient => patient.id == "940");
    console.log(initData);

    var otu_ids_all = initData.map(information => information.otu_ids);
    //console.log(otu_ids_all);

    var otu_ids_array = otu_ids_all[0];
    //console.log(otu_ids_array);

    var otu_ids = otu_ids_array.slice(0,10);
    console.log(otu_ids);

    var sample_values_all = initData.map(information => information.sample_values);
    //console.log(sample_values_all);

    var sample_values_array = sample_values_all[0];
    //console.log(sample_values_array);

    var sample_values = sample_values_array.slice(0,10);
    console.log(sample_values);

    // On change to the DOM, call getData()
    d3.selectAll("#selDataset").on("change", getData);

    //use a for loop to write the code to add options for the dropdown...
    //I just copy/pasted this over to the HTML file from the console.
    //I know there is a better way to do this :)
    //idList.forEach((id) => {
      //newHTML = `<option value=${id}>${id}</option>`;
      //console.log(newHTML);
    //});


    function getData() {
      var dropdownMenu = d3.select("#selDataset");
      // Assign the value of the dropdown menu option to a variable
      var dataset = dropdownMenu.property("value");
      console.log(dataset);
      var plotData = samples.filter(patient => patient.id == dataset);
      console.log(plotData);
      var otu_ids_all = plotData.map(information => information.otu_ids);
      console.log(otu_ids_all);
      var otu_ids_array = otu_ids_all[0];
      console.log(otu_ids_array);
      var otu_ids = otu_ids_array.slice(0,10);
      console.log(otu_ids);
      var sample_values_all = plotData.map(information => information.sample_values);
      console.log(sample_values_all);
      var sample_values_array = sample_values_all[0];
      console.log(sample_values_array);
      var sample_values = sample_values_array.slice(0,10);
      console.log(sample_values);
      var otu_labels = [];
      otu_ids.forEach((id) => {
        var label = `OTU ${id}`;
        otu_labels.push(label);
      });
      console.log(otu_labels);

      final_otu_ids = otu_labels.reverse();
      console.log(final_otu_ids);
      final_sample_values = sample_values.reverse();
      console.log(final_sample_values);

      //var barData = {
        //x: final_sample_values,
        //y: final_otu_ids,
        //type: "bar",
        //orientation: 'h'
      //};

      // Call function to update the chart
      //updatePlotly(final_sample_values);
      //updatePlotly2(final_otu_ids);
      //Plotly.restyle("bar", "xValuesReverse", [final_sample_values]);
      //Plotly.restyle("bar", "yValuesReverse", [final_otu_ids]);
      var trace1 = {
        x: final_sample_values,
        y: final_otu_ids,
        type: "bar",
        orientation: 'h'
      };
    
      var data = [trace1];
    
      var layout = {
      title: "Belly Button Data",
      //xaxis: {title: "Eye Color"},
      //yaxis: {title: "Eye Flickers per ???"}
      };
    
      Plotly.newPlot("bar", data, layout);


      //Update the bubble plot that is present on the dashboard....
      //===========================================================

      //create a random color list...
      var colors = [];
      for (var i = 0; i < otu_ids_array.length; i++) {
        var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        colors.push(randomColor);
      };

      //create the bubble plot
      var trace1 = {
        x: otu_ids_array,
        y: sample_values_array,
        mode: 'markers',
        marker: {
          size: sample_values_array,
          color: colors
        }
      };

      var data = [trace1];

      var layout = {
        showlegend: false,
        xaxis: { title: "OTU ID" },
      };

      Plotly.newPlot("bubble", data, layout);



      //try to just clear the html upon change...
      //does not work...
      //d3.select("sample-metadata").html("<div id='sample-metadata' class='panel-body'></div>")

      var patientInfo = metaData.filter(patient => patient.id == dataset);
      var id = patientInfo.map(information => information.id)[0];
      console.log(id);
      var ethnicity = patientInfo.map(information => information.ethnicity)[0];
      console.log(ethnicity);
      var gender = patientInfo.map(information => information.gender)[0];
      console.log(gender);
      var age = patientInfo.map(information => information.age)[0];
      var location = patientInfo.map(information => information.location)[0];
      var bbtype = patientInfo.map(information => information.bbtype)[0];
      var wfrequency = patientInfo.map(information => information.wfreq)[0];

      patientData = [`id: ${id}`,`ethnicity: ${ethnicity}`, `gender: ${gender}`,
                    `age: ${age}`, `location: ${location}`, `bbtype: ${bbtype}`, `wfrequency: ${wfrequency}`];
      console.log(patientData);

      d3.select("ul").html("<ul></ul>");

      d3.select("ul")
        .selectAll("li")
        .data(patientData)
        .enter()
        .append("li")
        .html(function(d) {
          return `<li>${d}</li>`;
        });

      





    };
});

init();