document.addEventListener("DOMContentLoaded", async () => {
  const postsContainer = document.querySelector(".posts-grid");

  if (!postsContainer) {
    console.error(
      "Error: Could not find the posts grid element (.posts-grid) in the DOM."
    );
    return;
  }

  // Hydrate & Render Posts Function
  function renderPosts(posts) {
    postsContainer.innerHTML = "";

    if (!posts || posts.length === 0) {
      postsContainer.innerHTML = `<div class="no-posts text-center py-8 text-gray-500 w-full col-span-full">No recent posts found.</div>`;
      return;
    }

    posts.forEach((post) => {
      const postHTML = `
        <article class="post-card">
          <div class="card-inner">
            <div class="post-image-wrapper">
              <img src="${post.image}" alt="${post.title}" />
            </div>
            <div class="post-content">
              <span class="post-category">${post.category}</span>
              <div class="post-title-box">
                <h3>${post.title}</h3>
              </div>
              <p class="post-description">
                ${post.description}
              </p>
              <a href="${post.link || '#'}" class="btn-read-more">
                Read More <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </article>`;

      postsContainer.insertAdjacentHTML("beforeend", postHTML);
    });
  }

  // Dynamic Fetching from JSON File
  try {
    const response = await fetch("./recent-posts.json");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const recentPostsData = await response.json();
    
    // Initial Render
    renderPosts(recentPostsData);
  } catch (error) {
    console.error("Error loading recent posts JSON:", error);
    postsContainer.innerHTML = `<p class="error-msg">Failed to load posts.</p>`;
  }
});