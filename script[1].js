async function loadFeed(){
  try {
    const res = await fetch("/data/posts.json");
    const posts = await res.json();
    let html = "";
    posts.slice().reverse().forEach(p=>{
      html += `<div class="card"><b>${p.mood} ${p.category}</b><p>${p.text}</p><div class="ai"><b>AI Reply:</b> ${p.aiReply}</div><small>${p.time}</small></div>`;
    });
    document.getElementById("feed").innerHTML = html || "<p>No posts yet. Be the first!</p>";
  } catch(e){
    document.getElementById("feed").innerHTML = "<p>Feed unavailable.</p>";
  }
}
loadFeed();
