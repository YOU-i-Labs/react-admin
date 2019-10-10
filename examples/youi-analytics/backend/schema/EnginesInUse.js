cube(`EnginesUsed`, {
  sql: `SELECT SUM(enginesusedonavailable_average+enginesusedondraining_average) AS enginesUsed,
        timestamp FROM "flattenedsessionrecords"."metrics"
        GROUP BY  timestamp`,
  
  joins: {
  },
  
  measures: {
    enginesUsedAvg: {
      sql: `enginesUsed`,
      type: `avg`
    },
    enginesUsedMax: {
      sql: `enginesUsed`,
      type: `max`
    },
    enginesUsedMin: {
      sql: `enginesUsed`,
      type: `min`
    }
  },
  
  dimensions: {
    timestamp: {
      sql: `from_iso8601_timestamp(timestamp)`,
      type: `time`
    },
  }
});
