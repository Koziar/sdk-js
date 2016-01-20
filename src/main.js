import axios from 'axios';
import assign from 'object-assign';

class RequestHandler {
    constructor(settings) {
        this._baseURL = settings.url;
        this._token = settings.token;
    }

    getAuthHeaders() {
        let headers = {
            'X-Auth-Token': this._token
        };

        let mergedHeaders = assign({}, headers, this.headers);
        return mergedHeaders;
    }

    /**
     * @private
     *
     * @param options {object} Contains axios options {method, url}, etc.
     *
     * @return {Promise}
     */
    _createRequest(options) {
        let baseRequest = {
            baseURL: this._baseURL,
            headers: this.getAuthHeaders()
        };

        let request = assign({}, baseRequest, options);

        return axios(request);
    }

    /**
     * @param resource {string} Resource endpoint e.g. /casefiles, /casefiles/1
     * @param params   {object} Object containing keys and values for URL Parameters.
     *
     * @return {Promise}
     */
    get(resource, params) {
        let request = {
            method: 'GET',
            url: resource,
            params: params
        };

        return this._createRequest(request);
    }

    /**
     * @param resource {string} Resource endpoint e.g. /casefiles, /casefiles/1/documents
     * @param data     {object} Data to be used for creating the resource
     *
     * @return {Promise}
     */
    post(resource, data) {
        let request = {
            method: 'GET',
            url: resource,
            data: data
        };

        return this._createRequest(request);
    }

    /**
     * @param resource {string} Resource endpoint e.g. /casefiles/1, /casefiles/1/documents/1
     * @param data     {object} Data to be used for updating the resource
     *
     * @return {Promise}
     */
    put(resource, data) {
        let request = {
            method: 'GET',
            url: resource,
            data: data
        };

        return this._createRequest(request);
    }

    /**
     * @param resource {string} Resource endpoint e.g. /casefiles/1, /casefiles/1/documents/1
     * @param data     {object} Data to be used for updating the resource
     *
     * @return {Promise}
     */
    patch(resource, data) {
        let request = {
            method: 'GET',
            url: resource,
            data: data
        };

        return this._createRequest(request);
    }

    /**
     * @param resource {string} Resource endpoint e.g. /casefiles/1, /casefiles/1/documents/1
     *
     * @return {Promise}
     */
    delete(resource) {
        let request = {
            method: 'DELETE',
            url: resource
        };

        return createRequest(request);
    }
}

export default RequestHandler;
