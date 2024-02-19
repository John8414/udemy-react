import React from 'react';

class CommentBox extends React.Component {

  handleChange = event => {
    this.setState({ comment: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({ comment: "" })
  }

  state = { comment: '' }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>
          Add a Comment
        </h4>
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <div>
          <button type="submit">
            Submit Comment
          </button>
        </div>
      </form>
    )
  }
}
export default CommentBox