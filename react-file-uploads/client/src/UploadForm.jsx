/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
export default function UploadForm() {
  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData();
    form.append('caption', event.target.caption.value);
    form.append('image', event.target.image.files[0]);

    try {
      const res = await fetch('api/uploads', {
        method: 'POST',
        body: form,
      });
      if (!res.ok) {
        throw new Error(res.status);
      }
      const result = await res.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
    /* Prevent the browser's default behavior for form submissions.
     * Create a `new` FormData object from the `event`.
     *
     * Use fetch() to send a POST request to '/api/uploads'.
     * The body should be the form data object you created (not a JSON string).
     * Headers are not necessary as fetch will use the correct Content-Type
     * automatically (multipart/form-data).
     *
     * Parse the JSON response body and log the parsed response body.
     * Log any errors to the console (using `console.error`).
     *
     * References:
     * https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
     * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
     */
  }

  return (
    <div className="container">
      <div className="row min-vh-100 pb-5 justify-content-center align-items-center">
        <div className="col col-md-8">
          <h3 className="text-center mb-5">React File Uploads</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                Caption:
                <input
                  required
                  autoFocus
                  type="text"
                  id="caption"
                  name="caption"
                  className="form-control bg-light"
                />
              </label>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <input
                required
                type="file"
                name="image"
                accept=".png, .jpg, .jpeg, .gif"
              />
              <button type="submit" className="btn btn-primary">
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
