import React from "react";

const Footer = () => {
  return (
    <div className="2xl:px-64 xl:px-40 max-xl:px-5 my-6 py-10 rounded-3xl  bg-[#374151]">
      <div className="flex max-sm:flex-col max-md:flex-wrap justify-between pt-10">
        {/* col-1 */}
        <div>
          <a href="https://dripify.io/">
            <img
              width="120"
              height="32"
              alt="Dripify"
              src="https://dripify.io/wp-content/uploads/2023/11/logo.svg"
              className="brightness-0 invert-[1] mb-4"
            />
          </a>
          <p className="text-sm mb-3 text-[#9ca3af] font-thicboi-semibold ">
            A smarter way to crush sales
          </p>
        </div>
        {/* col-2 */}
        <div className="flex flex-col ">
          <div className="mb-6">
            <p className="text-sm text-[#9ca3af] font-thicboi-bold mb-5">
              PRODUCT
            </p>
            <p className="text-white font-thicboi-semibold text-sm mb-3">
              Features
            </p>
            <p className="text-white font-thicboi-semibold text-sm mb-3">
              Video tutorials
            </p>
            <p className="text-white font-thicboi-semibold text-sm mb-3">
              Pricing
            </p>
          </div>
          <div>
            <p className="text-sm text-[#9ca3af] font-thicboi-bold mb-5">
              PARTNERS
            </p>
            <p className="text-white font-thicboi-semibold text-sm mb-3">
              Affiliate program
            </p>
          </div>
        </div>
        {/* col-3 */}
        <div className="mb-5">
          <p className="text-sm text-[#9ca3af] font-thicboi-bold mb-5">
            SOFTWARE
          </p>
          <p className="text-white font-thicboi-semibold text-sm mb-3">
            Drip Campaigns
          </p>
          <p className="text-white font-thicboi-semibold text-sm mb-3">
            LinkedIn analytics
          </p>
          <p className="text-white font-thicboi-semibold text-sm mb-3">
            Team management
          </p>
          <p className="text-white font-thicboi-semibold text-sm mb-3">
            Hyper-personalized outreach
          </p>
          <p className="text-white font-thicboi-semibold text-sm mb-3">
            Linkedin messenger tool
          </p>
          <p className="text-white font-thicboi-semibold text-sm mb-3">
            Extra profile security
          </p>
        </div>
        {/* col-4 */}
        <div className="mb-5">
          <p className="text-sm text-[#9ca3af] font-thicboi-bold mb-5">
            RESOURCES
          </p>
          <p className="text-white font-thicboi-semibold text-sm mb-3">Blog</p>
          <p className="text-white font-thicboi-semibold text-sm mb-3">FAQ</p>
          <p className="text-white font-thicboi-semibold text-sm mb-3">
            Profile makeover
          </p>
          <p className="text-white font-thicboi-semibold text-sm mb-3">
            Talk to sales
          </p>
          <p className="text-white font-thicboi-semibold text-sm mb-3">
            Help center
          </p>
          <p className="text-white font-thicboi-semibold text-sm mb-3">
            Contact us
          </p>
        </div>
        {/* col-5 */}
        <div className="mb-5">
          <p className="text-sm text-[#9ca3af] font-thicboi-bold mb-5">
            COMPARE
          </p>
          <p className="text-white font-thicboi-semibold text-sm mb-3">
            Dripify VS Dux Soup
          </p>
          <p className="text-white font-thicboi-semibold text-sm mb-3">
            Dripify VS Expandi
          </p>
          <p className="text-white font-thicboi-semibold text-sm mb-3">
            Dripify VS Meet Alfred
          </p>
          <p className="text-white font-thicboi-semibold text-sm mb-3">
            Dripify VS Phantombuster
          </p>
          <p className="text-white font-thicboi-semibold text-sm mb-3">
            Dripify VS Linked Helper
          </p>
          <p className="text-white font-thicboi-semibold text-sm mb-3">
            Dripify VS Waalaxy
          </p>
          <p className="text-white font-thicboi-semibold text-sm mb-3">
            Dripify VS Zopto
          </p>
        </div>
      </div>
      <hr className="border-1 border-gray-600" />
      <div className="flex max-sm:flex-col justify-between items-center mt-10">
        <p className="text-xs text-[#9ca3af] font-thicboi-bold ">
          &copy; 2025 ALL RIGHTS RESERVED. DRIPIFY - SALES AUTOMATION SOFTWARE.
          PRIVACY AND TERMS.
        </p>
        <div className="flex justify-between space-x-2">
          <svg
            class="ugb-custom-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="24"
            height="24"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.5 3H16.504C18.987 3 21 5.013 21 7.496V16.505C21 18.987 18.987 21 16.504 21H7.496C5.013 21 3 18.987 3 16.504V7.5C3 5.015 5.015 3 7.5 3V3Z"
              stroke="#9CA3AF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M8.11914 11.1001V16.5001"
              stroke="#9CA3AF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M11.7188 16.5001V13.3501C11.7188 12.1071 12.7257 11.1001 13.9688 11.1001V11.1001C15.2118 11.1001 16.2188 12.1071 16.2188 13.3501V16.5001"
              stroke="#9CA3AF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M8.11814 7.83799C7.99414 7.83799 7.89314 7.93899 7.89414 8.06299C7.89414 8.18699 7.99514 8.28799 8.11914 8.28799C8.24314 8.28799 8.34414 8.18699 8.34414 8.06299C8.34414 7.93799 8.24314 7.83799 8.11814 7.83799"
              stroke="#9CA3AF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <svg
            class="ugb-custom-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.002 15L15.198 12L10.002 9V15Z"
              stroke="#9CA3AF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.5 3H16.504C18.987 3 21 5.013 21 7.496V16.505C21 18.987 18.987 21 16.504 21H7.496C5.013 21 3 18.987 3 16.504V7.5C3 5.015 5.015 3 7.5 3V3Z"
              stroke="#9CA3AF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <svg
            class="ugb-custom-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.5 3H16.504C18.987 3 21 5.013 21 7.496V16.505C21 18.987 18.987 21 16.504 21H7.496C5.013 21 3 18.987 3 16.504V7.5C3 5.015 5.015 3 7.5 3V3Z"
              stroke="#9CA3AF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M9.684 11.314H14.315"
              stroke="#9CA3AF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M14.316 7.45508H13.506C12.249 7.45508 11.229 8.47508 11.229 9.72408V10.5421V16.5451"
              stroke="#9CA3AF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
