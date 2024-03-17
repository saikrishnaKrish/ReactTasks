
function Categories({ categories, setCurrCategory }) {

  return (
    <>
      <button
        className="category_option"
        onClick={() => {
          setCurrCategory("All categories");
        }}
      >
        All categories
      </button>
      {categories.length > 0 &&
        categories?.map((category) => {
          return (
            <button
              className="category_option"
              key={category.id}
              onClick={() => {
                setCurrCategory(category);
              }}
            >
              {" "}
              {category}
            </button>
          );
        })}
    </>
  );
}

export default Categories;
