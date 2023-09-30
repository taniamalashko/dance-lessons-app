// Function to extract the video ID from a YouTube link
function getVideoIdFromLink(link) {
  const url = new URL(link);
  const searchParams = new URLSearchParams(url.search);
  return searchParams.get('v');
}

export default getVideoIdFromLink;
