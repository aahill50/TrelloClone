# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list

json.title @board.title
json.user @board.user.email
json.lists @board.lists do |list|
  json.title list.title
  json.ord list.ord
  json.cards list.cards do |card|
    json.title card.title
    json.description card.description
    json.ord card.ord
  end
end
json.members @board.members do |member|
  json.email member.email
end

#
# json.content format_content(@message.content)
# json.(@message, :created_at, :updated_at)
#
# json.author do
#   json.name @message.creator.name.familiar
#   json.email_address @message.creator.email_address_with_name
#   json.url url_for(@message.creator, format: :json)
# end
#
# if current_user.admin?
#   json.visitors calculate_visitors(@message)
# end
#
# json.comments @message.comments, :content, :created_at
#
# json.attachments @message.attachments do |attachment|
#   json.filename attachment.filename
#   json.url url_for(attachment)
# end
# This will build the following structure:
#
# {
#   "content": "<p>This is <i>serious</i> monkey business</p>",
#   "created_at": "2011-10-29T20:45:28-05:00",
#   "updated_at": "2011-10-29T20:45:28-05:00",
#
#   "author": {
#     "name": "David H.",
#     "email_address": "'David Heinemeier Hansson' <david@heinemeierhansson.com>",
#     "url": "http://example.com/users/1-david.json"
#   },
#
#   "visitors": 15,
#
#   "comments": [
#     { "content": "Hello everyone!", "created_at": "2011-10-29T20:45:28-05:00" },
#     { "content": "To you my good sir!", "created_at": "2011-10-29T20:47:28-05:00" }
#   ],
#
#   "attachments": [
#     { "filename": "forecast.xls", "url": "http://example.com/downloads/forecast.xls" },
#     { "filename": "presentation.pdf", "url": "http://example.com/downloads/presentation.pdf" }
#   ]
# }