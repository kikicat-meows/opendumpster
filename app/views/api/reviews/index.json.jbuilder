@reviews.each_with_index do |review, idx|
    json.set! review.id do
        json.extract! review, *review.attributes.keys
        json.username (@users[idx].fname + " " + @users[idx].lname[0])
        json.user_initials (@users[idx].fname[0] + @users[idx].lname[0])
        json.user_reviews_count @users[idx].reviews.count
    end
end