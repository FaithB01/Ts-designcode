import React from 'react';
import Activity from './Activity';



function ActivityItemList() {
  
  const activityItems = [
    {
      project: 'Workcation',
      commit: '2d89f0c8',
      environment: 'production',
      time: '1h',
    },
    {
      project: 'KiteTail',
      commit: '249df660',
      environment: 'staging',
      time: '3h',
    },
    {
      project: 'Workcation',
      commit: '11464223',
      environment: 'staging',
      time: '12h',
    },
    {
      project: 'Easywire',
      commit: 'dad28e95',
      environment: 'production',
      time: '2d',
    },
    {
      project: 'Easywire',
      commit: '624bc94c',
      environment: 'production',
      time: '5d',
    },
    {
      project: 'Workcation',
      commit: 'e111f80e',
      environment: 'production',
      time: '1w',
    },
    {
      project: 'Resumaid',
      commit: '5e136005',
      environment: 'staging',
      time: '1w',
    },
    {
      project: 'KiteTail',
      commit: '5c1fd07f',
      environment: 'production',
      time: '2w',
    },
  ]

  const activityList = activityItems.map(item => (<Activity item={item} />))
  return (
    <>
      <article className="story-quarter ">
        <div className="act">
          <h4 className="activity-feed ">Activity</h4>
        </div>
        <div>
          {activityList}
        </div>
      </article>
    </>
  );
}

export default ActivityItemList;

