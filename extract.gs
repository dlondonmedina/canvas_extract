/* create array from csv list */
function importFromCSV() {
	// Get file name from user
	var fileName = Browser.inputBox("Enter the file in your Docs List to import (eg. myFile.csv):");
	// Check input against existing files and if exists extract content from CSV
	var files = DocsList.getFiles();
	var csvFile="";
	
	for (var i=0; i < files.length; i++) {
		if (files[i].getName() == fileName) {
			csvFile = files[i].getContentAsString();
			break;
		}
	}
	// Convert CSV string to array using "," as delimiter. This can be changed and the data could be cleaned, but we don't need that now. 
	var csvData = CSVToArray(csvFile, ",");
	var ss = SpreadsheetApp.getActiveSpreadsheet();
	for (var i = 0; i < csvData.length; i++) {
		sheet.getRange(i+1,1,1,csvData[i].length).setValues(newArray(csvData[i]));
	}
}

function getEPortfolioDocuments() {
	var portfolioURL = 
function getCanvasDocuments() {
/* these prompt user for the URL, in later version, you'll want to extract this from a database */
	var courseURL = Browser.inputBox("Input Canvas URL");
	var pathArray = courseUrl.split("/");
	var canvas = pathArray[2];
	var type = pathArray[3];
	var id = pathArray[4];
/*Need something to get a list of pages in the portfolio*/
	
/*need something to find download links*/
/*need something to download the files to googleDocs*/
/*need something to extract text from Word Docs and put it into appropriate fields in db*/

