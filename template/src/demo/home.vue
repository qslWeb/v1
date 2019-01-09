<template>
    <section>

       <mt-cell
        v-for="(item,indexs) in list"
        :to="item.path"
        :key = "indexs"
        is-link>
        <div slot="title">
          <i :class="['indexicon', 'icon-' + item.icon]"></i>
          <span v-text="item.name"></span>
        </div>
      </mt-cell>

    </section>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          'path': '/toast',
          'name': 'Toast',
          'icon': 'toast'
        },
        {
          'path': '/indicator',
          'name': 'Indicator',
          'icon': 'indicator'
        },
        {
          'path': '/pulldown',
          'name': 'Pull down',
          'icon': 'pull-down'
        },
        {
          'path': '/pullup',
          'name': 'Pull up',
          'icon': 'pull-up'
        },
        {
          'path': '/infinitescroll',
          'name': 'Infinite scroll',
          'icon': 'infinite-scroll'
        },
        {
          'path': '/messagebox',
          'name': 'Message box',
          'icon': 'message-box'
        },
        {
          'path': '/actionsheet',
          'name': 'Action sheet',
          'icon': 'action-sheet'
        },
        {
          'path': '/popup',
          'name': 'Popup',
          'icon': 'popup'
        },
        {
          'path': '/swipe',
          'name': 'Swipe',
          'icon': 'swipe'
        },
        {
          'path': '/lazyload',
          'name': 'Lazy load',
          'icon': 'lazyload'
        },
        {
          'path': '/range',
          'name': 'Range',
          'icon': 'range'
        },
        {
          'path': '/progress',
          'name': 'Progress',
          'icon': 'progress'
        },
        {
          'path': '/picker',
          'name': 'Picker',
          'icon': 'picker'
        },
        {
          'path': '/datetimepicker',
          'name': 'Datetime Picker',
          'icon': 'time'
        },
        {
          'path': '/indexlist',
          'name': 'Index List',
          'icon': 'alphabet'
        },
        {
          'path': '/palettebutton',
          'name': 'Palette Button',
          'icon': 'alphabet'
        },
        {
          'path': '/header',
          'name': 'Header',
          'icon': 'header'
        },
        {
          'path': '/tabbar',
          'name': 'Tabbar',
          'icon': 'tabbar'
        },
        {
          'path': '/navbar',
          'name': 'Navbar',
          'icon': 'navbar'
        },
        {
          'path': '/button',
          'name': 'Button',
          'icon': 'button'
        },
        {
          'path': '/cell',
          'name': 'Cell',
          'icon': 'cell'
        },
        {
          'path': '/cellswipe',
          'name': 'Cell Swipe',
          'icon': 'cell'
        },
        {
          'path': '/spinner',
          'name': 'Spinner',
          'icon': 'spinner'
        },
        {
          'path': '/tabcontainer',
          'name': 'TabContainer',
          'icon': 'panel'
        },
        {
          'path': '/search',
          'name': 'Search',
          'icon': 'searchbar'
        },
        {
          'path': '/switch',
          'name': 'Switch',
          'icon': 'switch'
        },
        {
          'path': '/checklist',
          'name': 'Checklist',
          'icon': 'checklist'
        },
        {
          'path': '/radio',
          'name': 'Radio',
          'icon': 'radio'
        },
        {
          'path': '/field',
          'name': 'Field',
          'icon': 'field'
        },
        {
          'path': '/badge',
          'name': 'Badge',
          'icon': 'badge'
        }
      ]

    }
  }

}
</script>
<style scoped>
.indexicon {
      font-size: 22px;
      color: #26a2ff;
      display: inline-block;
      width: 30px;
      vertical-align: middle;
}
.icon-swipe {font-size: 26px;}
.icon-checklist {font-size: 18px;}
    
  
</style>

