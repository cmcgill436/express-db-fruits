const React = require("react");
const Nav = require("../components/Nav");
const DefaultLayout = require("../layout/Default");

class Index extends React.Component {
  render() {
    const { vegetables } = this.props;
    return (
      <DefaultLayout
        title="vegetables Index Page"
        link="/vegetables/new"
        text="Create a vegetable"
      >
        <ul>
          {vegetables.map((vegetable, i) => {
            return (
              <li key={i}>
                The{" "}
                <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a> is{" "}
                {vegetable.color} <br></br>
                {vegetable.readyToEat
                  ? `It is ready to eat`
                  : `It is not ready to eat`}
                <br />
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
