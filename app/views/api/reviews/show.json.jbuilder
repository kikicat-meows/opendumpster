json.extract! @review, *@review.attributes.keys
json.username (@user.fname + " " + @user.lname[0])
json.user_initials (@user.fname[0] + @user.lname[0])
json.user_reviews_count @user.reviews.count