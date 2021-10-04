<template>
  <div>
    <div
      class="absolute inset-0 z-10 text-sm font-normal text-gray-900 bg-gray-600/75 top-8"
      v-show="is_left_menu_open"
      @click.self="closeMenu()"
      ></div><!-- overly -->

      <div
        class="absolute bottom-0 z-30 w-4/5 max-h-full min-h-full pb-8 overflow-y-auto text-gray-900 bg-gray-100 dark:bg-gray-900 divide-y dark:divide-gray-500 divide-gray-200 transition-all duration-200 -left-full dark:text-white top-8"
        :class="{'left-0': is_left_menu_open}"
        >

        <div>
          <div class="px-3 py-4 text-base font-bold">Gmail</div>
        </div> <!-- block -->

        <div>
          <div class="flex justify-between py-3 pl-3 my-1 mr-2 cursor-pointer">
            <div class="flex items-center">
              <div class="w-6">
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <div>Active</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="flex justify-between py-3 pl-3 my-1 mr-2 cursor-pointer">
            <div class="flex items-center">
              <div class="w-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <div>Add a status</div>
            </div>
          </div>
        </div> <!-- block -->

        <div>
          <MenuItem is_current="true">
            <div class="flex items-center">
                <div class="w-6">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <div>Inbox</div>
              </div>
          </MenuItem>

          <div class="p-3 tracking-wider uppercase">All labels</div>
          <MenuItem>
            <div class="flex items-center">
              <div class="w-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div>Starred</div>
            </div>
          </MenuItem>
          <MenuItem>
            <div class="flex items-center">
              <div class="w-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>Snoozed</div>
            </div>
          </MenuItem>
          <MenuItem>
            <div class="flex items-center">
              <div class="w-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 transform rotate-135" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <div>Important</div>
            </div>
          </MenuItem>
          <MenuItem>
            <div class="flex items-center">
              <div class="w-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <div>Sent</div>
            </div>
          </MenuItem>
          <MenuItem>
            <div class="flex items-center">
              <div class="w-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 rotate-90" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </div>
              <div>Scheduled</div>
            </div>
          </MenuItem>
          <MenuItem>
            <div class="flex items-center">
              <div class="w-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <div>Outbox</div>
            </div>
          </MenuItem>
          <MenuItem>
            <div class="flex items-center">
              <div class="w-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>Drafts</div>
            </div>
          </MenuItem>
          <MenuItem>
            <div class="flex items-center">
              <div class="w-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>Spam</div>
            </div>
          </MenuItem>
          <MenuItem>
            <div class="flex items-center">
              <div class="w-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <div>Bin</div>
            </div>
          </MenuItem>
          <div class="p-3 tracking-wider uppercase">Google apps</div>
          <MenuItem>
            <div class="flex items-center">
              <div class="w-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>Calendar</div>
            </div>
          </MenuItem>
          <MenuItem>
            <div class="flex items-center">
              <div class="w-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>Contacts</div>
            </div>
          </MenuItem>
        </div>
        <div>
          <MenuItem>
            <div class="flex items-center">
              <div class="w-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>Settings</div>
            </div>
          </MenuItem>
          <MenuItem>
            <div class="flex items-center">
              <div class="w-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>Help and feedback</div>
            </div>
          </MenuItem>
        </div> <!-- block -->
      </div>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
  components: {
    MenuItem,
  },

  props: {
    is_left_menu_open: {default: false},
  },
  methods: {
    closeMenu() {
      this.$parent.is_left_menu_open = false;
    },
  },
}
</script>
