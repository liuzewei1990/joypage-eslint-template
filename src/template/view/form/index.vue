<!--  -->
<template>
    <BcPageForm class="">
        <div>{{ form }}</div>
        <JumpType v-model:jumpType="form.jumpType" v-model:jumpContent="form.jumpContent" v-model:pmpId="form.pmpId" v-model:pmpValue="form.pmpValue"></JumpType>
        <ChannelSelect v-model:appFlag="form.appFlag" v-model:device="form.device" v-model:visibleUser="form.visibleUser"></ChannelSelect>
    </BcPageForm>
</template>

<script>
    import BcPageForm from "@common/finsuit-components/BcPageForm";
    import JumpType from "@common/finsuit-modules/Form/JumpType.vue";
    import ChannelSelect from "@common/finsuit-modules/Form/ChannelSelect.vue";
    import { reactive } from "vue";
    export default {
        components: { BcPageForm, JumpType, ChannelSelect },
        setup() {
            const form = reactive({
                jumpType: "",
                jumpContent: "",
                pmpId: "",
                pmpValue: "",
                appFlag: ["BC", "PMP"],
                device: "TY",
                visibleUser: ""
            });

            return { form };
        }
    };
</script>
<style lang="less" scoped></style>
