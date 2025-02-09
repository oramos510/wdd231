document.addEventListener("DOMContentLoaded", async () => {

    const membersData = await fetch('data/members.json')
      .then(response => response.json())
      .catch(error => {
        console.error("Error fetching members data:", error);
      });

    const memberContainer = document.querySelector("#member-list");
  

    membersData.forEach(member => {
      const memberCard = document.createElement("div");
      memberCard.classList.add("member-card");
  

      memberCard.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}" class="member-image">
        <h3>${member.name}</h3>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p><strong>Membership Level:</strong> ${getMembershipLevel(member.membership_level)}</p>
        <p><strong>Other Info:</strong> ${member.other_info}</p>
      `;
  
      memberContainer.appendChild(memberCard);
    });
  });
  
  function getMembershipLevel(level) {
    switch (level) {
      case 1:
        return "Member";
      case 2:
        return "Silver";
      case 3:
        return "Gold";
      default:
        return "Unknown";
    }
  }
  