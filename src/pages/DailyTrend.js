import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import {
    Paper,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TablePagination,
} from "@mui/material";
import { WEATHER_API_BASE_URLS,WEATHER_API_KEY } from '../constants/api_endpoints';


const DailyTrend = () => {

  // getting and setting the daily trends data and pagination state data here

  const [page, pageChange] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [rowPerPage, rowPerPageChange] = useState(10);

  const [weatherData,setWeatherData] = useState(null);

  const handlePageChange = (e, newPage) => {
    pageChange(newPage);
  };

  const handleRowsPageChange = (event) => {
    rowPerPageChange(+event.target.value);
    pageChange(0);
  };
   
  // calling the daily trends API here in useEffect

  

  const fetchData = async () => {
    if (!startDate || !endDate) {
      alert('Please select start and end dates.');
      return;
    }
    try {
      // Make API request with startDate and endDate
      const data = await fetch(`${WEATHER_API_BASE_URLS.WEATHER_HISTORY_BASE_URL}?q=${"delhi"}&from_date=${startDate}&to_date=${endDate}`)
      var result = await data.json();
      setWeatherData(result?.list)
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error
    }
  }


  const handleDownload=(rowData)=>{
    let downloadData = []
    downloadData.push(rowData)

    var csvContent = "data:text/csv;charset=utf-8,";
    var dataString;
    downloadData?.forEach((obj,index)=>{
        console.log("obj",obj)
        dataString = ""

        // pushing the headers of the csv to be downloaded
        Object.entries(obj).map(obj1 => {
          const key   = obj1[0];
          const value = obj1[1];

          if (typeof value === 'string'){
          dataString = dataString + key + ","
          }
          else if (key == 'main'){
            dataString = dataString + "Min Temp" + "," + "Max Temp" + "," + "Humidity" + ","
          }
       });
       dataString = dataString + "\n"
       
      // pushing the values of the csv to be downloaded

       Object.entries(obj).map(obj1 => {
        const key   = obj1[0];
        const value = obj1[1];

        if (typeof value === 'string'){
        dataString = dataString + value + ","
        }
        else if (key == 'main'){
          dataString = dataString + value.temp_min + "," + value.temp_max + "," + value.humidity + ","
        }
     });
     dataString = dataString + "\n"

        csvContent += index < obj.length ? dataString+ "\n" : dataString
    })
    var encodedUri = encodeURI(csvContent);
	window.open(encodedUri);
  }
  return (
    <div>
      <Navbar />
      <div className="row">
            <div className="col-md-10 col-12 mx-auto">
            <div className="datepicker-container">
      <div className="datepicker-input">
        <label htmlFor="start-date">Start Date:</label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="datepicker-input">
        <label htmlFor="end-date">End Date:</label>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <button className="weather-data-button" onClick={fetchData}>Fetch  Weather Historical Data</button>
    </div>
      <Paper sx={{ width: "100%" }}>
              <TableContainer>
                <Table style={{ border: "1px solid #BCBCBC" }}>
                  <TableHead>
                    <TableRow
                      style={{ backgroundColor: "#1e272e", color: "white" }}
                    >
                      <TableCell
                        style={{
                          color: "white",
                          textAlign: "center",
                          border: "1px solid #BCBCBC",
                          maxWidth: "50px",
                        }}
                      >
                        Date
                      </TableCell>
                      <TableCell
                        style={{
                          color: "white",
                          textAlign: "center",
                          border: "1px solid #BCBCBC",
                        }}
                      >
                        Max Temperature
                      </TableCell>
                      <TableCell
                        style={{
                          color: "white",
                          textAlign: "center",
                          border: "1px solid #BCBCBC",
                          maxWidth: "100px",
                        }}
                      >
                        Min Temperature
                      </TableCell>
                      <TableCell
                        style={{
                          color: "white",
                          textAlign: "center",
                          border: "1px solid #BCBCBC",
                          maxWidth: "100px",
                        }}
                      >
                        Humidity
                      </TableCell>
                      <TableCell
                        style={{
                          color: "white",
                          textAlign: "center",
                          border: "1px solid #BCBCBC",
                          maxWidth: "100px",
                        }}
                      >
                        Download Data
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  {weatherData
                    ?.slice(page * rowPerPage, page * rowPerPage + rowPerPage)
                    ?.map((obj, index) => (
                      <TableBody>
                        <TableRow 
                        key={index}
                        >
                          <TableCell
                            style={{
                              textAlign: "center",
                              border: "1px solid #BCBCBC",
                              maxWidth: "100px",
                              fontSize:"20px"
                            }}
                          >
                            {obj?.date}
                          </TableCell>
                          <TableCell
                            style={{
                              textAlign: "center",
                              border: "1px solid #BCBCBC",
                              fontSize:"20px"
                            }}
                          >
                            <div className="file_name_detail">
                              <div>{obj?.main?.temp_max} </div>
                              <div className="info_detail">
                                <span className="info_icon">
                                  {/* <BsFillInfoCircleFill
                                    size={20}
                                    style={{ color: "#473598" }}
                                  />{" "} */}
                                  <span className="user_info">
                                    {/* {obj?.purpose} */}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell
                            style={{
                              textAlign: "center",
                              border: "1px solid #BCBCBC",
                              maxWidth: "100px",
                              fontSize:"20px"
                            }}
                          >
                            {obj?.main?.temp_min}
                          </TableCell>
                          <TableCell
                            style={{
                              textAlign: "center",
                              border: "1px solid #BCBCBC",
                              maxWidth: "100px",
                              fontSize:"20px"
                            }}
                          >
                            {obj?.main?.humidity}
                          </TableCell>
                          <TableCell
                            style={{
                              textAlign: "center",
                              border: "1px solid #BCBCBC",
                              maxWidth: "300px",
                              fontSize:"20px"
                            }}
                          >
                            <button className='download_btn' onClick={()=>handleDownload(obj)}>Download</button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    ))}
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                page={page}
                rowsPerPage={rowPerPage}
                count={weatherData?.length}
                component={"div"}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPageChange}
              ></TablePagination>
            </Paper>
            </div>
            </div>
    </div>
  )
}

export default DailyTrend