import React from 'react';
import RestaurantReviewItem from './restaurant_review_item';

import NewReviewFormContainer from './new_review_form_container';
import EditReviewFormContainer from './edit_review_form_container';

class RestaurantReviews extends React.Component {
    constructor(props) {
        super(props);
        this.toggleEditForm = this.toggleEditForm.bind(this);
    }

    componentDidMount() {
        this.props.getRestaurantReviews(this.props.restaurant.id);
    }


    // sort by newest review creation date, then by alphbaetical order
    sortReviewsByNewest(reviewsArr) {
        return reviewsArr.sort((a, b) =>
            a.updated_at < b.updated_at ? 1 : a.updated_at === b.updated_at ? (a.username > b.username ? 1 : -1) : -1);
    }

    renderUserReview(userReview) {
        return (
                    <>
                        <EditReviewFormContainer 
                            review={userReview[0]}
                            toggleEditForm={this.toggleEditForm}/>
                        {
                            userReview.map(review => 
                                <RestaurantReviewItem
                                    key="user" 
                                    review={review}
                                    currentUser={this.props.currentUser}
                                    openModal={this.props.openModal}
                                    toggleEditForm={this.toggleEditForm}/>
                            )
                        }
                    </>
        )
    }

    renderOtherReviews(otherReviews) {
        return (
                    <> 
                        {
                            otherReviews.map( (review, idx) => 
                                <RestaurantReviewItem
                                    key={`reviews-${idx}`} 
                                    review={review}/>)
                        }
                    </>
        )
    }

    createUserReview() {
        if (this.props.currentUser.visited_restaurant_ids.includes(this.props.restaurant.id)) {
            return <NewReviewFormContainer restaurantId={this.props.restaurant.id}/>;
        } else {
            return '';
        }
    }
    
    toggleEditForm() {
        let editForm = document.querySelector('.review-form-container');
        let userComment = document.querySelector('.review-item-container-user');
        this.props.clearReviewErrors();
        editForm.classList.toggle('hidden');
        userComment.classList.toggle('hidden');
    }

    render () {
        let renderedUserReviewComponent;
        let renderedReviewListComponent;
        let reviewsArray;
        const noReviews = <p className='no-reviews'>This restaurant has not yet been reviewed.</p>

        if (!this.props.currentUser) {
            if (this.props.reviews.length > 0) {
                reviewsArray = this.sortReviewsByNewest(this.props.reviews);
                renderedReviewListComponent = this.renderOtherReviews(reviewsArray);

            } else {
                renderedReviewListComponent = noReviews;
            }
        } else {
            let userReview = this.props.reviews.filter(review => review.user_id === this.props.currentUser.id);
            let otherReviews = this.props.reviews.filter(review => review.user_id !== this.props.currentUser.id);

            if (userReview.length > 0 && otherReviews.length > 0) {
                reviewsArray = this.sortReviewsByNewest(otherReviews);

                renderedUserReviewComponent = this.renderUserReview(userReview);
                renderedReviewListComponent = this.renderOtherReviews(reviewsArray);

            } else if (userReview.length > 0 && otherReviews.length === 0) {

                renderedUserReviewComponent = this.renderUserReview(userReview);
                renderedReviewListComponent = '';

            } else if (userReview.length === 0 && otherReviews.length > 0) {
                reviewsArray = this.sortReviewsByNewest(otherReviews);

                renderedUserReviewComponent = this.createUserReview();
                renderedReviewListComponent = this.renderOtherReviews(reviewsArray);
            } else if (userReview.length === 0 && otherReviews.length === 0) {

                renderedUserReviewComponent = this.createUserReview();
                renderedReviewListComponent = noReviews;
            }

        }



        return (
            <div className="reviews" id='reviews'>
                <div className="reviews-header">
                    Reviews
                </div>
                {renderedUserReviewComponent}
                {renderedReviewListComponent}
            </div>
        );
    }
}

export default RestaurantReviews;