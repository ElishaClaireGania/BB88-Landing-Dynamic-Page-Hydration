const recentPostsData = [
  {
    image: "./assets/picture/picture1.png",
    category: "Politics",
    title: "E-Commerce's Impact on Marketing:",
    description: "Harnessing Online Channels to Boost Sales and Reach New Customers",
    link: "#"
  },
  {
    image: "./assets/picture/picture2.png",
    category: "Sports",
    title: "The Rise of Mobile Marketing:",
    description: "Creating Mobile-Optimized Campaigns to Reach Customers on-the-go",
    link: "#"
  },
  {
    image: "./assets/picture/picture3.png",
    category: "Entertainment",
    title: "The Rise of Mobile Marketing:",
    description: "Creating Mobile-Optimized Campaigns to Reach Customers on-the-go",
    link: "#"
  }
];

document.addEventListener("DOMContentLoaded", () => {
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

  renderPosts(recentPostsData);
});