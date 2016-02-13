Meteor.publish 'pageMeta', (pageIds) ->

    # If an Array is Passed
    if typeof pageIds == 'Array'

        # Publish Meta for All Passed Pages
        PageMeta.find
            page:
                $in: pageIds

    else

        # Publish Meta for Page
        PageMeta.find
            page: pageIds