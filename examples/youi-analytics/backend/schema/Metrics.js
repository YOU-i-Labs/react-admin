cube(`Metrics`, {
  sql: `SELECT * FROM metricsarchive.metrics`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [timestamp, appname, stackname, stagename]
    },

    enginesusedonavailable_average: {
      sql: `enginesusedonavailable_average`,
      type: `avg`
    },
    
    enginestartlatencymsSamplecount: {
      sql: `enginestartlatencyms_samplecount`,
      type: `sum`
    },
    
    engineterminationSamplecount: {
      sql: `enginetermination_samplecount`,
      type: `sum`
    },
    
    enginestartrequestSamplecount: {
      sql: `enginestartrequest_samplecount`,
      type: `sum`
    }
  },
  
  dimensions: {
    timestamp: {
      sql: `from_iso8601_timestamp(timestamp)`,
      type: `time`
    },

    enginedurationmins_minimum: {
      sql: `enginedurationmins_minimum`,
      type: `number`
    },
    
    enginedurationmins_average: {
      sql: `enginedurationmins_average`,
      type: `number`
    },

    enginedurationmins_maximum: {
      sql: `enginedurationmins_maximum`,
      type: `number`
    },

    engineutilizationpercent_average: {
      sql: `engineutilizationpercent_average`,
      type: `number`
    },
    
    enginesmaxonavailable_average: {
      sql: `enginesmaxonavailable_average`,
      type: `number`
    },

    enginesmaxondraining_average: {
      sql: `enginesmaxondraining_average`,
      type: `number`
    },

    // enginesusedonavailable_average: {
    //   sql: `enginesusedonavailable_average`,
    //   type: `number`
    // },
    
    enginesusedondraining_average: {
      sql: `enginesusedondraining_average`,
      type: `number`
    },

    groupinserviceinstances_average: {
      sql: `groupinserviceinstances_average`,
      type: `number`
    },
  
    appname: {
      sql: `appname`,
      type: `string`
    },
    
    stackname: {
      sql: `stackname`,
      type: `string`
    },
    
    stagename: {
      sql: `stagename`,
      type: `string`
    },
    
    region: {
      sql: `region`,
      type: `string`
    },
    
    partition0: {
      sql: `partition_0`,
      type: `string`,
      title: `Partition 0`
    }
  }
});
