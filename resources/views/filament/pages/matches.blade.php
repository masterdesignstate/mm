<x-filament-panels::page>


    <form wire:submit="create" class="gap-4">
        <div>
        {{ $this->form }}
        </div>

        @if(!$isResetButton)
        <x-filament::button class="mt-4" style="margin-top:20px" type="submit">
            Generate Match
        </x-filament::button>
        @endif
    </form>

    @if($isResetButton)
        <x-filament::button class="mt-4" style="margin-top:20px" type="button" onclick="location.reload()">
            Reset
        </x-filament::button>
    @endif

    @if(!empty($data['self']))
        <section>
            <h2 style="margin-bottom:20px" class="font-bold" >{{$self->name}}</h2>
            <livewire:self-table :self="$self->id" :seek="$seek->id" :persons="$persons2" />
        </section>

        <section>
            <h2 style="margin-bottom:20px" class="font-bold" >{{$seek->name}}</h2>
            <livewire:self-table :self="$seek->id" :seek="$self->id" :persons="$persons1"/>
        </section>

        <section>
            <h1 style="text-align: center;font-weight: bold">
                Overall ={{$this->final_result }} %
            </h1>
        </section>
    @endif


</x-filament-panels::page>
