const Search = (props) => {

  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        name="search"
        value={props.value}
        placeholder="Search Rides"
        onChange={(event) => props.onChange(event)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Search