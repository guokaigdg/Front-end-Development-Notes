import React from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import CX from "classnames";

const useStyles = makeStyles({
  itemWrap: {
    display: "flex",
    // justifyContent: "flex-start",
    alignItems: "center",
    width: 225,
    height: 29,
    cursor: "pointer",
    textDecoration: "none",

    "&:hover": {
      // height: 29,
      // height: 29,
      backgroundColor: "#E6ECF1"
    }
  },

  fontH1Default: {
    marginLeft: 17,
    fontSize: 12,
    fontWeight: 500,
    color: "#7C8893"
  },
  fontH1Choosen: {
    color: "#A755ED"
  },
  fontH2Default: {
    marginLeft: 24,
    fontSize: 12,
    fontWeight: 500,
    color: "#7C8893"
  },

  fontH2Choosen: {
    color: "#A755ED"
  }
});

function StickyBlockBox(props) {
  const { list } = props;
  let location = useLocation();
  let newHref = location.hash;
  console.log("Href---------->");
  console.log(newHref);

  const classes = useStyles();
  return (
    <div>
      {list.map((item, index) => (
        <Link to={item.href} className={classes.itemWrap} key={index + item}>
          {item.type === "H1" && (
            <span
              className={CX({
                [classes.fontH1Default]: true,
                [classes.fontH1Choosen]: item.href === newHref
              })}
            >
              {item.name}
            </span>
          )}
          {item.type === "H2" && (
            <div
              className={CX({
                [classes.fontH2Default]: true,
                [classes.fontH2Choosen]: item.href === newHref
              })}
            >
              {item.name}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}
export default StickyBlockBox;
