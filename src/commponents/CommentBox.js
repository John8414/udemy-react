import React from 'react';

class CommentBox extends Component {

  handleChange = () => {
    this.setState({ comment: event.target.value })
  }

  handleSubmit = () => {
    event.preventDefault()


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