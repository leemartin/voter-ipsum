'use strict';

const loremIpsum = require('lorem-ipsum')

module.exports.vote = (event, context, callback) => {
  const output = loremIpsum({
    count: 1,
    units: 'paragraph',
    words: ['go', 'vote', 'today']
  })

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      "voter-ipsum": output
    })
  }

  callback(null, response)
}
