//create an initBar function to create a horizontal bar chart as a placeholder
//I used data from subject id 940...
//========================================================================================================
//copied these over from console logged data below, xValues are sample_values for id 940
xValues = [163, 126, 113, 78, 71, 51, 50, 47, 40, 40];

//values must be reversed so the largest value is displayed on the top
xValuesReverse = xValues.reverse();

//yValues are the OTU id values copied from a console.log defined above
yValues = ["OTU 1167", "OTU 2859", "OTU 482", "OTU 2264", "OTU 41", "OTU 1189", "OTU 352", "OTU 189", "OTU 2318", "OTU 1977"];

//list must be reversed to correspond with the reversed xValues
yValuesReverse = yValues.reverse();

//slice and reverse the otu_labels data
var otu_labels_bar = ["Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Proteobacteria;Epsilonproteobacteria;Campylobacterales;Campylobacteraceae;Campylobacter", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae;Varibaculum", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria;Firmicutes;Clostridia;Clostridiales;Veillonellaceae", "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;Peptococcaceae;Peptococcus", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Gallicola", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Gallicola", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae;Prevotella", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;Ruminococcaceae", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria", "Bacteria;Firmicutes", "Bacteria", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes", "Bacteria;Firmicutes", "Bacteria;Firmicutes", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria"];
var otu_labels_sliced = otu_labels_bar.slice(0,10);
var otu_labels_reversed = otu_labels_sliced.reverse();

//function will initialize plot in the "bar" div
function initBar() {
  var trace1 = {
    x: xValuesReverse,
    y: yValuesReverse,
    text: otu_labels_reversed,
    type: "bar",
    orientation: 'h'
  };

  //create an array from trace1 
  var data = [trace1];

  //layout gives the chart a title
  var layout = {
  title: "Belly Button Data for Subject 940",
  };
  //call plotly to create a new chart in the specified div and with the specified data and layout
  Plotly.newPlot("bar", data, layout);
};

//Create Bubble Plot to hold the place for a new plot....Use patient id 940 like above bar chart
//========================================================================================================

//data for bubble plot was copied over from a console.log below
var otu_bubble = [1167, 2859, 482, 2264, 41, 1189, 352, 189, 2318, 1977, 3450, 874, 1959, 2191, 1950, 2077, 2275, 944, 2184, 2244, 2024, 2419, 2811, 165, 2782, 2247, 2011, 2396, 830, 2964, 1795, 2722, 307, 2178, 2908, 1193, 2167, 1208, 2039, 1274, 2739, 2737, 1314, 1962, 2186, 2335, 2936, 907, 833, 2483, 2475, 2491, 2291, 159, 2571, 2350, 2342, 2546, 725, 170, 1505, 513, 259, 1169, 258, 1232, 1497, 1498, 1503, 412, 2235, 1960, 1968, 121, 2065, 340, 2110, 2188, 357, 342];
var sample_values_bubble = [163, 126, 113, 78, 71, 51, 50, 47, 40, 40, 37, 36, 30, 28, 25, 23, 22, 19, 19, 14, 13, 13, 13, 12, 12, 11, 11, 11, 10, 10, 10, 8, 7, 7, 7, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
var otu_labels_bubble = ["Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Proteobacteria;Epsilonproteobacteria;Campylobacterales;Campylobacteraceae;Campylobacter", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae;Varibaculum", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria;Firmicutes;Clostridia;Clostridiales;Veillonellaceae", "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;Peptococcaceae;Peptococcus", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Gallicola", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Gallicola", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae;Prevotella", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;Ruminococcaceae", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria", "Bacteria;Firmicutes", "Bacteria", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes", "Bacteria;Firmicutes", "Bacteria;Firmicutes", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria"];

//I used a line of code that I found on the internet to create a random list of colors that was
//the same length as the otu-ids
var colors = [];
for (var i = 0; i < otu_bubble.length; i++) {
  var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  colors.push(randomColor);
};

//console.log(colors);

//create an initBubble function to create a bubble plot that will hold the place of the
//bubble div
function initBubble() {
  var trace1 = {
    x: otu_bubble,
    y: sample_values_bubble,
    text: otu_labels_bubble,
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
};


//Create a very basic gauge chart to hold the place on the dashboard
//=======================================================================================================
var data = [
	{
		domain: { x: [0, 1], y: [0, 1] },
    value: 2,
    rotation: 90,
    text: [
      "0-1",
      "1-2",
      "2-3",
      "3-4",
      "4-5",
      "5-6",
      "6-7",
      "7-8",
      "8-9"
    ],
    textinfo: "text",
    textposition: "inside",
    marker: {
      colors: [
        "rgba(14, 127, 0, .5)",
        "rgba(110, 154, 22, .5)",
        "rgba(170, 202, 42, .5)",
        "rgba(202, 209, 95, .5)",
        "rgba(210, 206, 145, .5)",
        "rgba(232, 226, 202, .5)",
        "rgba(255, 255, 255, 0)"
      ]
    },
    labels: [
      "0-1",
      "1-2",
      "2-3",
      "3-4",
      "4-5",
      "5-6",
      "6-7",
      "7-8",
      "8-9"
    ],
    type: "pie",
    hole: 0.5,
    showlegend: false,
    gauge: {
      axis: { range: [null, 9] }
    },
		title: { text: "Washing Frequency" },
		//type: "indicator",
		mode: "gauge+number"
	}
];

Plotly.newPlot("gauge", data);


//read in the JSON file
//NOTE:  remember to start a localhost server to read in the JSON file
//this can be done in terminal by navigating to the location of the index.html file
//and typing in the command: python -m http.server
//=======================================================================================================
d3.json("samples.json").then ((importedData) => {
    //console.log(importedData);

    //get the id data from the importedData
    var idList = importedData.names;
    //console.log(idList);

    //get the metadata from the importedData
    var metaData = importedData.metadata;
    //console.log(metaData);

    //get the sample data from the importedData
    var samples = importedData.samples;
    //console.log(samples);

    //Get Data to make the initBar, initBubble, and initGauge plots
    //=============================================================
    var initData = samples.filter(patient => patient.id == "940");
    //console.log(initData);

    var otu_labels_all = initData.map(information => information.otu_labels);
    //console.log(otu_labels_all);

    var otu_labels_array = otu_labels_all[0];
    //console.log(otu_labels_array);

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
    //=======================================================================
    d3.selectAll("#selDataset").on("change", getData);

    //use a for loop to write the code to add options for the dropdown...
    //I just copy/pasted this over to the HTML file from the console.
    //I know there is a better way to do this :)
    //idList.forEach((id) => {
      //newHTML = `<option value=${id}>${id}</option>`;
      //console.log(newHTML);
    //});

    //the function getData specifies what to do when the dropdown menu changes
    //=============================================================================
    function getData() {
      //define the dropdown menu
      var dropdownMenu = d3.select("#selDataset");

      // Assign the value of the dropdown menu option to a variable
      var dataset = dropdownMenu.property("value");
      //console.log(dataset);

      //filter the samples data to get the entry where the dropdown value matches the patiend id
      var plotData = samples.filter(patient => patient.id == dataset);
      //console.log(plotData);

      //from the selected patient data, get the otu_ids, use map bc it is an object
      var otu_ids_all = plotData.map(information => information.otu_ids);
      //console.log(otu_ids_all);
      
      //select the first item to become an array
      var otu_ids_array = otu_ids_all[0];
      //console.log(otu_ids_array);
      
      //slice the array to get the first 10 values
      var otu_ids = otu_ids_array.slice(0,10);
      //console.log(otu_ids);
      
      //from the selected patient data, get the sample_values, use map bc it is an object
      var sample_values_all = plotData.map(information => information.sample_values);
      //console.log(sample_values_all);
      
      //select the first item to become an array
      var sample_values_array = sample_values_all[0];
      //console.log(sample_values_array);
      
      //slice the array to get the first 10 values
      var sample_values = sample_values_array.slice(0,10);
      //console.log(sample_values);
      
      //add "OTU to the beginning of each otu_id"
      var otu_labels = [];
      otu_ids.forEach((id) => {
        var label = `OTU ${id}`;
        otu_labels.push(label);
      });
      //console.log(otu_labels);

      
      //reverse the otu ids to match the sample values
      final_otu_ids = otu_labels.reverse();
      //console.log(final_otu_ids);
      
      
      //reverse the sample values so the largest value is on the top of the graph
      final_sample_values = sample_values.reverse();
      //console.log(final_sample_values);

      //get the otu labels data from the selected patient data
      var otu_labels_all = plotData.map(information => information.otu_labels);
      //console.log(otu_ids_all);
      
      //select the out labels first item, slice, and reverse the data
      var otu_labels_array = otu_labels_all[0];
      var otu_labels = otu_labels_array.slice(0,10);
      var otu_labels_reversed = otu_labels.reverse();

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
      
      //create a plot that matches the selected patient id....
      var trace1 = {
        x: final_sample_values,
        y: final_otu_ids,
        text: otu_labels_reversed,
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
        text: otu_labels_array,
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
      
      //define the demographics data from the metadata for the selected patient
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

      //create an array that contains the key and value pairs...
      patientData = [`id: ${id}`,`ethnicity: ${ethnicity}`, `gender: ${gender}`,
                    `age: ${age}`, `location: ${location}`, `bbtype: ${bbtype}`, `wfrequency: ${wfrequency}`];
      //console.log(patientData);

      //NOTE:  I added the unordered list to the HTML file
      //replace whatever existing unordered list is present with an empty list by replacing the HTML
      d3.select("ul").html("<ul></ul>");

      //use data binding to append the patients data to the dashboard
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

//Calls the initBar function to create a placeholder bar chart on the dashboard
initBar();
initBubble();