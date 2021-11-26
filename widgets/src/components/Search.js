import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);
    return () => {
      clearTimeout(timerID);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);

  const renderedResulsts = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <label>Enter search term</label>
        <input
          className="input"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        ></input>
      </div>
      <div className="ui celled list">{renderedResulsts}</div>
    </div>
  );
};

export default Search;
