"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comment9 = exports.comment8 = exports.comment7 = exports.comment6 = exports.comment5 = exports.comment4 = exports.comment3 = exports.comment2 = exports.comment1 = exports.mkComment = void 0;
var profilePicture = '/static/profilePicture1.png';

var mkComment = function mkComment(n, children, pageInfo) {
  return {
    id: n,
    displayAuthor: {
      profilePicture: profilePicture,
      name: "".concat(n, " \u2013 Christof Moser"),
      credential: {
        description: 'Journalist, Autor, Diktator, Rebel und Republikaner',
        verified: true
      }
    },
    upVotes: 8,
    downVotes: 3,
    userVote: 'DOWN',
    content: 'Journalismus strebt nach Klarheit, er ist der Feind der uralten Angst vor dem Neuen.',
    comments: children.length === 0 ? pageInfo ? {
      totalCount: 27,
      pageInfo: pageInfo,
      nodes: []
    } : undefined : {
      totalCount: 27,
      pageInfo: pageInfo,
      nodes: children
    }
  };
};

exports.mkComment = mkComment;
var comment1 = mkComment('1', []);
exports.comment1 = comment1;
var comment2 = mkComment('2', [mkComment('2.1', [])], {
  hasNextPage: true
});
exports.comment2 = comment2;
var comment3 = mkComment('3', [mkComment('3.1', []), mkComment('3.2', [])], {
  hasNextPage: true
});
exports.comment3 = comment3;
var comment4 = mkComment('4', [mkComment('4.1', []), mkComment('4.2', []), mkComment('4.3', [])], {
  hasNextPage: true
});
exports.comment4 = comment4;
var comment5 = mkComment('5', [mkComment('5.1', [mkComment('5.1.1', [])]), mkComment('5.2', [], {
  hasNextPage: true
})], {
  hasNextPage: true
});
exports.comment5 = comment5;
var comment6 = mkComment('6', [mkComment('6.1', [mkComment('6.1.1', [], {
  hasNextPage: true
}), mkComment('6.1.2', [])], {
  hasNextPage: true
}), mkComment('6.2', [])], {
  hasNextPage: true
});
exports.comment6 = comment6;
var comment7 = mkComment('7', [mkComment('7.1', [mkComment('7.1.1', []), mkComment('7.1.2', [])]), mkComment('7.2', [mkComment('7.2.1', [])])]);
exports.comment7 = comment7;
var comment8 = mkComment('8', [mkComment('8.1', [mkComment('8.1.1', [mkComment('8.1.1.1', [])])])]);
exports.comment8 = comment8;
var comment9 = mkComment('9', [mkComment('9.1', [mkComment('9.1.1', []), mkComment('9.1.2', []), mkComment('9.1.3', [mkComment('9.1.3.1', [mkComment('9.1.3.1.1', []), mkComment('9.1.3.1.2', [mkComment('9.1.3.1.2.1', []), mkComment('9.1.3.1.2.2', [])])])])])]);
exports.comment9 = comment9;