const fields = {
  query: "nft",
  state: "scheduled",
  spaceFields:
    "id,state,host_ids,created_at,creator_id,lang,invited_user_ids,participant_count,speaker_ids,started_at,ended_at,topic_ids,title,updated_at,scheduled_start",
  expansions: "host_ids,invited_user_ids,speaker_ids,creator_id",
  userFields:
    "created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld",
  topicFields: "id,name,description",
};

export default fields;
