cube(`SessionMoviesDevices`, {
  sql: `SELECT * FROM flattenedsessionrecords.session_movies_devices`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [sessionid, title]
    }
  },
  
  dimensions: {
    sessionid: {
      sql: `sessionid`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    model: {
      sql: `model`,
      type: `string`
    }
  }
});
