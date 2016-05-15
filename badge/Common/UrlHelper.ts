/// <reference path="./../interfaces/IUrlHelper.ts"/>

namespace badge.Common
{
    class UrlHelper implements IUrlHelper {
        getParameter(name: string) {
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            const regexS = `[\\?&]${name}=([^&#]*)`;
            const regex = new RegExp(regexS);
            const results = regex.exec(window.location.href);
            if (results == null)
                return "";
            else
                return results[1];
        }
    }
}