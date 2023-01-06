export const Request = async (data) => {
  await fetch("https://webhook.site/65d15356-c3d8-4122-b519-569658e84121", {
    method: "POST",

    body: JSON.stringify(data),
  });
};
