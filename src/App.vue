<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
</script>

<template>
  <p>outer i18n-t : <i18n-t :tag="false" keypath="tooltipText"></i18n-t></p>
  <p id="tooltip-$t">$t</p>

  <b-tooltip
    target="tooltip-$t"
    triggers="hover"
    boundary="window"
    placement="right"
  >
    {{ $t('tooltipText') }}
  </b-tooltip>

  <p id="tooltip-i18n-t">i18n-t tag</p>

  <b-tooltip
    target="tooltip-i18n-t"
    triggers="hover"
    boundary="window"
    placement="right"
  >
    <i18n-t :tag="false" keypath="tooltipText"></i18n-t>
  </b-tooltip>
</template>
