const Search = (props) => {

  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        id="name"
        value={props.value}
        placeholder="Reservation Name"
        onChange={(event) => props.onChange(event)}
      />
      <input
        type="text"
        id="email"
        value={props.value}
        placeholder="Email"
        onChange={(event) => props.onChange(event)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Search
