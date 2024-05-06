/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import EachCard from "./card";
import DummyCard from "./skeliton";

const Weekday = ({ filterData }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        limit: 197,
        offset: 0,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };

      try {
        const response = await fetch(
          "https://api.weekday.technology/adhoc/getSampleJdJSON",
          requestOptions
        );
        const result = await response.json(); // Parse response as JSON
        setData(result.jdList);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [offset]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setOffset((prevOffset) => prevOffset + 10);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /// Filter data based on Redux filter options
  const filteredData = data.filter((item) => {
    // Check if item's experience is included in filterData's experience
    if (
      filterData.experience?.length > 0 &&
      !filterData.experience.includes(item.minExp?.toString())
    ) {
      return false;
    }

    // Check if item's location is included in filterData's location
    if (
      filterData.location?.length > 0 &&
      !filterData.location.includes(item?.location)
    ) {
      return false;
    }
    // Check if item's location is included in filterData's location
    if (
      filterData.workMode?.length > 0 &&
      !filterData.workMode.includes(item?.location)
    ) {
      return false;
    }
    if (
      filterData.salary?.length > 0 &&
      !filterData.salary.includes(item?.minJdSalary)
    ) {
      return false;
    }

    if (
      filterData.companyName?.length > 0 &&
      !item?.companyName
        .toLowerCase()
        .includes(filterData.companyName.toLowerCase())
    ) {
      return false;
    }

    if (
      filterData.techStacks?.length > 0 &&
      !filterData.techStacks.includes(item?.techStacks)
    ) {
      return false;
    }

    // If none of the filter conditions match, return true to include the item
    return true;
  });

  if (loading === false) {
    // Create a Set to store unique values
    const uniqueJobRoles = new Set();
    // Iterate through filteredData to add jobRole values to the Set
    filteredData.forEach((item) => {
      uniqueJobRoles.add(item.location);
    });

    // Convert the Set back to an array (if needed) and log it
    // console.log([...uniqueJobRoles]);
  }

  return (
    <div className="weekdayContainer">
      <div className="cardsContainer">
        {loading ? (
          // Render dummy cards when loading
          Array.from({ length: 10 }).map((_, index) => (
            <DummyCard key={index} />
          ))
        ) : filteredData.length > 0 ? (
          // Render cards if filtered data exists
          filteredData.map((each, index) => (
            <EachCard data={each} key={index} />
          ))
        ) : (
          // Render "No data found" message if filtered data is empty
          <div className="noDataText">No data found</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filterData: state.filter.filterData,
});

export default connect(mapStateToProps)(Weekday);
