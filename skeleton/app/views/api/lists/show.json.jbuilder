json.title @list.title

json.ord @list.ord

json.cards @list.cards do |card|
  json.id card.id
  json.title card.title
  json.description card.description
  json.ord card.ord
end