import React from 'react';

import { formatReviewCount } from "../../util/format_review_count_util";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";


class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.review.user_id,
            restaurant_id: this.props.review.restaurant_id,
            rating: this.props.review.rating,
            comment: this.props.review.comment
        };

        this.update = this.update.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.selectStars = this.selectStars.bind(this);
        this.getStarArray = this.getStarArray.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    displayStars() {
        const starsArray = [];

        let count = 1;
        for (let i = 1; i <= this.state.rating; i++) {
            starsArray.push(
                <FontAwesomeIcon 
                    icon={faStar}
                    key={count}
                    id={`${count}stars`}
                    value={count}
                    className='review-ratings-blank selected'
                    onClick={this.selectStars}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    />
            )
            count ++;
        }

        while (starsArray.length < 5) {
            starsArray.push(
                <FontAwesomeIcon
                    icon={faStar} 
                    key={count}
                    id={`${count}stars`}
                    value={count}
                    className='review-ratings-blank'
                    onClick={this.selectStars}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    />                
            )
            count ++;
        }

        return starsArray;
    }

    getStarArray(star) {
        let parentNode = star.parentNode;
        return Array.from(parentNode.childNodes);
    }

    selectStars(e) {
        let selectedRating = parseInt(e.currentTarget.id);
        let starsArray = this.getStarArray(e.currentTarget);

        starsArray.forEach(star => {
          star.classList.remove("active");
          star.classList.remove("inactive");
        });

        this.setState({rating: selectedRating});
    }

    handleMouseEnter(e) {
        let starsArray = this.getStarArray(e.currentTarget);
        let currentStar = parseInt(e.currentTarget.id);

        for (let i = 0; i < currentStar; i++) {
            starsArray[i].classList.add('active');
        }

        for (let i = currentStar; i < starsArray.length; i++) {
            starsArray[i].classList.add('inactive');
        }
    }
    
    handleMouseLeave(e) {
        let starsArray = this.getStarArray(e.currentTarget);

        starsArray.forEach(star => {
            star.classList.remove('active');
            star.classList.remove('inactive');
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.formType === 'new') {
            const review = Object.assign({}, this.state);
            setTimeout(() =>
            this.props
                .action(review)
                .then(res => {
                    this.props.getRestaurantReviews(res.review.restaurant_id);
                    this.props.requestARestaurant(res.review.restaurant_id);
                }
                )
            );
        } else {
            const review = {
                review: this.state,
                id: this.props.review.id
            }
            setTimeout(() =>
                this.props.action(review)
                    .then(res => {
                        this.props.getRestaurantReviews(res.review.restaurant_id);
                        this.props.requestARestaurant(res.review.restaurant_id);
                    }))
            this.props.toggleEditForm();
        }
    }

    clearForm() {
        if (this.props.formType === 'new') {
            let form = document.querySelector(".review-item-right-form");

            this.setState({ rating: 0, comment: "" });

            form.reset();
        } else {
            this.props.toggleEditForm();

            this.setState({ rating: this.props.review.rating, comment: this.props.review.comment });
        }

        this.props.clearReviewErrors();
    }

    renderErrors() {
        return (
            <ul className="review-errors">
                {
                    this.props.errors.map((err, i) => (
                        <li key={`review-err-${i}`} className='review-err'>
                            {err}
                        </li>
                    ))
                }
            </ul>
        )
    }

    displayActionButtons() {
        let buttons;

        if (this.props.formType === 'new') {
            buttons =
                <>  
                    <div className="review-action submit" onClick={this.handleSubmit}>
                        Submit
                    </div>
                    <div className="review-action clear" onClick={this.clearForm}>
                        Clear
                    </div>    
                </>
        } else {
            buttons =
                <>
                    <div className="review-action update" onClick={this.handleSubmit}>
                        Update
                    </div>
                    <div className="review-action cancel" onClick={this.clearForm}>
                        Cancel
                    </div>
                </>
        }

        return buttons;
    }

    render() {
        let user = this.props.currentUser;
        let containerClassName = (this.props.formType === 'new') ? "review-form-container" : "review-form-container hidden";

        return (
          <div className={containerClassName}>
            <div className="review-item-left review-form">
              <div className="review-user-initials-container review-form">
                <div className="review-user-initials-circle">
                  <div className="review-user-initials">
                    {user.fname[0] + user.lname[0]}
                  </div>
                </div>
              </div>
              <div className="review-user-username-container review-form">
                <span className="review-user-username">
                  {user.fname + " " + user.lname[0]}
                </span>
              </div>
              <div className="review-user-reviewscount-container">
                <FontAwesomeIcon icon={faCommentAlt} />
                <span>
                  {formatReviewCount(user.reviews_count)}
                </span>
              </div>
            </div>
            <form className="review-item-right-form" onSubmit={this.handleSubmit}>
                {this.renderErrors()}
                <div className="review-ratings-container">
                    <div className="review-ratings-form">
                        {this.displayStars()}
                    </div>
                </div>
                <div className="review-comment-container review-form">
                    <textarea
                        className='review-comment review-form'
                        value={this.state.comment}
                        onChange={this.update('comment')}
                        placeholder='Please leave your comments, questions, or suggestions here.'
                        wrap='true' 
                        />
                </div>
                <div className="review-actions review-form">
                    {this.displayActionButtons()}
                </div>
            </form>
          </div>
        );
    }
}

export default ReviewForm;