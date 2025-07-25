import { computed, ref, toValue, watch } from "vue";
import { Plugin } from "../types";

export const useReadyPlugin: Plugin = (
  requestInstance,
  { manual, ready = ref(true) }
) => {
  const readyRef = computed(() => toValue(ready));

  const unwatch = watch(readyRef, (value) => {
    if (!manual && value) {
      requestInstance.refresh();
    }
  });

  return {
    onBefore: () => {
      if (readyRef.value) {
        return { isReady: true };
      }
    },
    onCancel: () => {
      unwatch();
    },
  };
};
