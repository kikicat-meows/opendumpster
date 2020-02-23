import React from 'react';

class DeleteReview extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.deleteReview(this.props.review.id)
            .then(res => {
            this.props.closeModal();
            this.props.updateUser(this.props.review.user_id);
            this.props.history.push(`/restaurants/${this.props.review.restaurant_id}#reviews`);
            this.props.requestARestaurant(this.props.review.restaurant_id);
          });
        
    }

    render() {
        return (
          <div className="cancel-modal-content">
            <h3>Are you sure you want to delete this review?</h3>
            <br />
            <br />
            <div className="cancel-confirm-button-container">
              <button
                className="cancel-confirm-button"
                onClick={this.handleSubmit}
              >
                Delete Review
              </button>
            </div>
            <a className="cancel-discard-link-review" onClick={this.props.closeModal}>
              Cancel
            </a>
          </div>
        )
    }
}

export default DeleteReview;