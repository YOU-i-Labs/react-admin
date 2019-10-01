cube(`Sessions`, {
  sql: `SELECT * FROM flattenedsessionrecords.sessionrecords`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [applicationname, yistackname, eventid, sessionid, friendlyname, osname, title]
    },
    
    playcount: {
      sql: `playcount`,
      type: `sum`
    },
    
    duration: {
      sql: `duration`,
      type: `sum`
    }
  },
  
  dimensions: {
    applicationname: {
      sql: `applicationname`,
      type: `string`
    },
    
    cloudclientversion: {
      sql: `cloudclientversion`,
      type: `string`
    },
    
    cloudversiontag: {
      sql: `cloudversiontag`,
      type: `string`
    },
    
    mincloudserverversion: {
      sql: `mincloudserverversion`,
      type: `string`
    },
    
    osversion: {
      sql: `osversion`,
      type: `string`
    },
    
    servertag: {
      sql: `servertag`,
      type: `string`
    },
    
    yistackname: {
      sql: `yistackname`,
      type: `string`
    },
    
    stage: {
      sql: `stage`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    statusreason: {
      sql: `statusreason`,
      type: `string`
    },
    
    eventid: {
      sql: `eventid`,
      type: `string`
    },
    
    sourceip: {
      sql: `sourceip`,
      type: `string`
    },
    
    useragent: {
      sql: `useragent`,
      type: `string`
    },
    
    serialnumber: {
      sql: `serialnumber`,
      type: `string`
    },
    
    eventtype: {
      sql: `eventtype`,
      type: `string`
    },
    
    sessionid: {
      sql: `sessionid`,
      type: `string`
    },
    
    friendlyname: {
      sql: `friendlyname`,
      type: `string`
    },
    
    firmwareversion: {
      sql: `firmwareversion`,
      type: `string`
    },
    
    modelnumber: {
      sql: `modelnumber`,
      type: `string`
    },
    
    manufacturemodel: {
      sql: `manufacturemodel`,
      type: `string`
    },
    
    externalip: {
      sql: `externalip`,
      type: `string`
    },
    
    osname: {
      sql: `osname`,
      type: `string`
    },
    
    manufacturer: {
      sql: `manufacturer`,
      type: `string`
    },
    
    reason: {
      sql: `reason`,
      type: `string`
    },
    
    islive: {
      sql: `islive`,
      type: `string`
    },
    
    streamformat: {
      sql: `streamformat`,
      type: `string`
    },
    
    playterminationreason: {
      sql: `playterminationreason`,
      type: `string`
    },
    
    backonplaystop: {
      sql: `backonplaystop`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    partition0: {
      sql: `partition_0`,
      type: `string`,
      title: `Partition 0`
    },
    
    partition1: {
      sql: `partition_1`,
      type: `string`,
      title: `Partition 1`
    }
  }
});
