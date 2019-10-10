cube(`Sessionrecords`, {
  sql: `SELECT * FROM flattenedsessionrecords.sessionrecords`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [applicationname, yistackname, eventid, sessionid, clientdataOsname, clientdataTitle]
    },
    
    playcount: {
      sql: `playcount`,
      type: `sum`
    },
    
    clientdataDuration: {
      sql: `clientdata_duration`,
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
    
    clientdataSourceip: {
      sql: `clientdata_sourceip`,
      type: `string`
    },
    
    clientdataUseragent: {
      sql: `clientdata_useragent`,
      type: `string`
    },
    
    clientdataSerialnumber: {
      sql: `clientdata_serialnumber`,
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
    
    clientdataManufacturemodel: {
      sql: `clientdata_manufacturemodel`,
      type: `string`
    },
    
    clientdataFirmwareversion: {
      sql: `clientdata_firmwareversion`,
      type: `string`
    },
    
    clientdataOsname: {
      sql: `clientdata_osname`,
      type: `string`
    },
    
    clientdataManufacturer: {
      sql: `clientdata_manufacturer`,
      type: `string`
    },
    
    clientdataReason: {
      sql: `clientdata_reason`,
      type: `string`
    },
    
    clientdataIslive: {
      sql: `clientdata_islive`,
      type: `string`
    },
    
    clientdataStreamformat: {
      sql: `clientdata_streamformat`,
      type: `string`
    },
    
    clientdataTitle: {
      sql: `clientdata_title`,
      type: `string`
    },
    
    clientdataPlayterminationreason: {
      sql: `clientdata_playterminationreason`,
      type: `string`
    },
    
    reason: {
      sql: `reason`,
      type: `string`
    },
    
    partition0: {
      sql: `partition_0`,
      type: `string`,
      title: `Partition 0`
    }
  }
});
