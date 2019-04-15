import { expect } from "chai";
import formService from "./form_service.js";

describe("API Calls", function() {
  describe("fetching form", function() {
    it("returns a valid object", function() {
      return formService.getForm()
        .then((response) => {
          expect(typeof response).to.equal("object");
        });
    });
  });
});
