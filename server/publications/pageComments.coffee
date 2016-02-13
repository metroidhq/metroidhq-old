Meteor.publish 'pageComments', (pageIds) ->

    # Get Current User
    user = Meteor.users.findOne
        _id: @userId

    # If Current User Exists
    if user

        # If Current User is Admin
        if user.roles && user.roles.__global_roles__.indexOf('admin') != -1

            # If an Array is Passed
            if typeof pageIds == 'Array'

                # Publish Comments for All Passed Pages
                PageComments.find
                    page:
                        $in: pageIds

            else

                # Publish Comments for Page
                PageComments.find
                    page: pageIds

        else

            # If an Array is Passed
            if typeof pageIds == 'Array'
                
                # Publish Comments for All Passed Pages That are Owned by the User or Unarchived
                PageComments.find
                    page:
                        $in: pageIds

                    $or: [
                            user: @userId
                        ,
                            archived: false
                    ]


            else

                # Publish Comments for Page That are Owned by the User or Unarchived
                PageComments.find
                    page: pageIds

                    $or: [
                            user: @userId
                        ,
                            archived: false
                    ]

    else

        # If an Array is Passed
        if typeof pageIds == 'Array'
            
            # Publish Comments for All Passed Pages That are Unarchived
            PageComments.find
                page:
                    $in: pageIds

                archived: false


        else

            # Publish Comments for Page That are Unarchived
            PageComments.find
                page: pageIds
                archived: false