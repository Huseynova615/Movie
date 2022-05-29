import React, { useState, useEffect } from "react";
import "./ListPage.css";
import { connect } from "react-redux";
import { getList, getMovieInfoByImdbID } from "../../state/actions/dataActions";
import Header from "../../components/Header/Header";
function ListPage(props) {
 

  const [state, setState] = useState({
    isClicked: false
  })


  useEffect(()=>{
    const id = props.match.params.id
    console.log(id)
    props.getList(id)
  },[])

    console.log(props);
    return (
      <div className="list-page">
        <Header />
        <h1 className="list-title">{props.title}</h1>
        <ul>
          {props.movieDetails.map((item) => {
            return (
              <li key={item.imdbID} className="list-movie">
                <img
                  src={item.Poster}
                  className="movie-poster"
                  alt={item.Title}
                />
                <div className="info">
                  <h3 className="mov-title">{item.Title}</h3>
                  <h4 className="mov-about">About movie</h4>
                  <div className="listinfo">
                    <div className="listinfo-title">
                      Date:
                    </div>
                    <div className="listinfo-value">{item.Year}</div>
                  </div>
                  <div className="listinfo">
                    <div className="listinfo-title">Country:</div>
                    <div className="listinfo-value">
                      {item.Country}
                    </div>
                  </div>
                  <div className="listinfo">
                    <div className="listinfo-title">Genre:</div>
                    <div className="listinfo-value">{item.Genre}</div>
                  </div>
                  <div className="listinfo-value">
                    <ul className="movie-item__info-list">
                      {/* <li id="movie-item__info-item">
                        <button className="movie-item__add-button link-imdb">
                          Обзор
                        </button>
                      </li> */}
                      <li id="movie-item__info-item">
                        <button className="movie-item__add-button link-imdb">
                          <a
                            href={`https://www.imdb.com/title/${item.imdbID}/`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="list-page__link-imdb"
                          >
                            See more on imdb
                          </a>
                        </button>
                      </li>
                    </ul>
                    {/* <p>{item.Plot}</p> */}
                    {/* {this.state.isClicked ?  : null} */}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
  getList: (id) => dispatch(getList(id)),
  getMovieInfoByImdbID: (listMovies) =>
    dispatch(getMovieInfoByImdbID(listMovies)),
});

const mapStateToProps = (state) => {
  return {
    title: state.title,
    movieDetails: state.movieDetails,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
