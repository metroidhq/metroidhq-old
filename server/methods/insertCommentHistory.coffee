Meteor.methods insertCommentHistory: (data) ->
    if data
        user = Meteor.user()

        # If Current User Exists
        if user

            # Get Comment
            comment = PageComments.findOne
                _id: data.commentId

            # If Current User is Author or Admin
            if @userId == comment.userId ||
            (user.roles && user.roles.__global_roles__.indexOf('admin') != -1)

                # Insert Comment History
                CommentHistories.insert data