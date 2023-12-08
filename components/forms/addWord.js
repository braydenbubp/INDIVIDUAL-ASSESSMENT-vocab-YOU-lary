import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="title">New Vocab</label>
        <input type="text" class="form-control" id="new_vocab" placeholder="New Vocab" value="${obj.new_vocab || ''}" required>
      </div>
      <div class="form-group">
        <label for="text">Definition</label>
        <input type="text" class="form-control" id="definition" placeholder="Definition" value="${obj.definition || ''}" required>
      </div>
      <div class="form-group">
        <label for="text">Posted By</label>
        <input type="text" class="form-control" id="posted_by" placeholder="Posted By" value="${obj.posted_by || ''}" placeholder="Enter Email" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Vocab</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
