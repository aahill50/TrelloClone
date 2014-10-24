# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list

json.title @board.title

json.user @board.user.email

json.lists @board.lists do |list|
  json.id list.id
  json.title list.title
  json.ord list.ord
  json.cards list.cards do |card|
    json.id card.id
    json.title card.title
    json.description card.description
    json.ord card.ord
  end
end

json.members @board.members do |member|
  json.email member.email
end