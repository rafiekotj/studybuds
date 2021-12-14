import noresultstyle from "./noresult.module.scss";

function NoResult() {
  return (
    <div className={noresultstyle.noResultContainer}>
      <p>sorry we couldn't find any classrooms from this category.</p>
    </div>
  );
}

export default NoResult;
