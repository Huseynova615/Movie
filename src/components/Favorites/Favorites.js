import React, { useState } from "react";

import "./Favorites.css";
import { connect } from "react-redux";
import { removeMovieFromFavoriteList, postList } from "../../state/actions/dataActions";
import { Link } from "react-router-dom";

function Favorites(props) {

  const [state, setState] = useState({
    isSbm: false,
    title: "",
  })

  const favoriteChangeHandler = (e) => {
    setState({ title: e.target.value });
  };
  const getImdbIDArray = () => {
    let favoritesIDArray = props.favoriteList.map((item) => {
      return item.imdbID;
    });
    return favoritesIDArray;
  };
  const saveListHandler = () => {
    setState({ isSbm: true });
    props.postList(state.title, getImdbIDArray());
  };
    const { title, isSbm } = state;
    return (
      <div className="favs">
        <input
        placeholder="Add your heading"
          value={title}
          className="favna"
          onChange={favoriteChangeHandler}
          disabled={state.isSbm}
        />
        <ul className="favul">
          {props.favoriteList.map((item) => {
            return (
              <li key={item.imdbID}>
                <div className="block">
                <button
                  className="remove"
                  onClick={() =>
                    props.removeMovieFromFavoriteList(item.imdbID)
                  }
                >
                  ❌
                </button>
                <p className="movname">{item.Title} ({item.Year})</p>
                </div>
              </li>
            );
          })}
        </ul>

        {!isSbm ? (
          <button
            type="button"
            className="favsave"
            onClick={saveListHandler}
          >
            Save List
          </button>
        ) : (
          <button type="button" className="favsave">
            <Link
              to={"/list/" + props.listID}
              target="_blank"
              className="link-to__list"
            >
              Your favorite movies
            </Link>
          </button>
        )}
      </div>
    );
}
const mapStateToProps = (state) => {
  return {
    favoriteList: state.favoriteList,
    favoritesIDArray: state.favoritesIDArray,
    listID: state.listID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeMovieFromFavoriteList: (id) => {
      dispatch(removeMovieFromFavoriteList(id));
    },
    postList: (title, favoritesIDArray) => {
      dispatch(postList(title, favoritesIDArray));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
